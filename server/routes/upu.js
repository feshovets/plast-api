const express = require("express");
const router = express.Router();

const data = require("../data.json");

const sortData = (arr, key) => {
    if (key === "name") return arr.sort((a, b) => a.name.localeCompare(b.name));
    if (key === "number") return arr.sort((a, b) => a.number - b.number);
    if (key === "founded") return arr.sort((a, b) => new Date(a.founded) - new Date(b.founded));
    return arr;
};

router.get("/", (req, res) => {
    const { number, gender, location, sort } = req.query;
    let upuData = data.upu;

    if (number) {
        const found = upuData.find((item) => item.number == number);
        return found
            ? res.json(found)
            : res.status(404).json({ message: "UPU unit not found" });
    }

    if (gender) {
        upuData = upuData.filter((item) =>
            item.gender.toLowerCase() === gender.toLowerCase()
        );
    }

    if (location) {
        upuData = upuData.filter((item) =>
            item.location.toLowerCase().includes(location.toLowerCase())
        );
    }
    if (sort) {
        upuData = sortData(upuData, sort);
    }


    const page = Number(req.query.page) || 1;
    const totalPages = Math.ceil(upuData.length / 10);
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;

    const resultData = upuData.slice(startIndex, endIndex);

    const baseUrl = `${req.protocol}://${req.get("host")}${req.baseUrl}`;
    const queryParams = new URLSearchParams(req.query);

    let nextUrl = null;
    let prevUrl = null;

    if (page < totalPages) {
        queryParams.set("page", page + 1);
        nextUrl = `${baseUrl}?${queryParams.toString()}`;
    }

    if (page > 1) {
        queryParams.set("page", page - 1);
        prevUrl = `${baseUrl}?${queryParams.toString()}`;
    }

    res.json({
        info: {
            count: upuData.length,
            pages: totalPages,
            next: nextUrl,
            prev: prevUrl,
        },
        result: resultData,
    });
});

router.get("/:id", (req, res) => {
    const found = data.upu.find((item) => item.id === req.params.id);
    if (!found) return res.status(404).json({ message: "UPU unit not found" });
    res.json(found);
});

module.exports = router;
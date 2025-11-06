const express = require("express");
const router = express.Router();

const data = require("../data.json");

const sortData = (arr, key) => {
    if (key === "name") return arr.sort((a, b) => a.name.localeCompare(b.name));
    if (key === "number") return arr.sort((a, b) => a.usp_number - b.usp_number);
    if (key === "founded") return arr.sort((a, b) => new Date(a.founded) - new Date(b.founded));
    return arr;
};

router.get("/", (req, res) => {
    const { number, gender, sort } = req.query;
    let uspData = data.usp;

    if (number) {
        const found = uspData.find((item) => item.usp_number == number);
        return found
            ? res.json(found)
            : res.status(404).json({ message: "USP unit not found" });
    }

    if (gender) {
        uspData = uspData.filter((item) =>
            item.gender.toLowerCase() === gender.toLowerCase()
        );
    }

    if (sort) {
        uspData = sortData(uspData, sort);
    }

    const page = Number(req.query.page) || 1;
    const totalPages = Math.ceil(uspData.length / 10);
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;

    const resultData = uspData.slice(startIndex, endIndex);

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
            count: uspData.length,
            pages: totalPages,
            next: nextUrl,
            prev: prevUrl,
        },
        result: resultData,
    });
});

router.get("/:id", (req, res) => {
    const found = data.usp.find((item) => item.id === req.params.id);
    if (!found) return res.status(404).json({ message: "USP not found" });
    res.json(found);
});

module.exports = router;
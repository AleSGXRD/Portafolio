import { Router } from "express";
const router = new Router();

router.get("/guitarTabs", (req, res) => res.render("index"));

router.get("/guitarTabs-about", (req, res) => res.render("about"));
router.get("/guitarTabs-tabs", (req, res) => res.render("tabs"));
router.get("/", (req, res) => res.render("portafolio"));

export default router;

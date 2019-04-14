import { applyMiddleware } from "redux";
import logger from "./logger";

// logger last
export default applyMiddleware(logger);

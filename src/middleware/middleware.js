import { applyMiddleware } from "redux";
import logger from "./logger";
import dealer from "./gameFlow";

// logger last
export default applyMiddleware(dealer, logger);

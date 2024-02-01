import { createBlacklistFilter } from "redux-persist-transform-filter";

const auth: any = createBlacklistFilter("Auth", ["userID"]);
const product = createBlacklistFilter("Product", ["product","pageCount","totalCount"]);

export const AllFilters = [auth ,product];

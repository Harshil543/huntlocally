import { AllFilters } from "../Filters";
import createEncryptor from "redux-persist-transform-encrypt";
import createPersistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";

const encryptor: any = createEncryptor({
  secretKey: "977a815e-c711-4056-b8bb-489112e0fffa-8995",
  onError: function (error: any) {
    return error;
  },
});

export const persistPlugin: any = createPersistPlugin({
  key: "root",
  whitelist: ["Auth"],
  // blacklist: [],
  // throttle: 3000,
  version: 1,
  storage,
  transforms: [...AllFilters, encryptor],
});

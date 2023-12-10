import Cookies from "js-cookie"
import { COOKIES } from "./cookies"

export const HEADER = {
  public: () => ({
    'Content-Type': 'application/json',
  }),
  protected: (type: "query" | "refresh") => ({
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${Cookies.get(type === "query" ? COOKIES.ACCESS_TOKEN : COOKIES.REFRESH_TOKEN || "")}`
  })
}
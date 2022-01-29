import axios from "axios";
import Cookie from "@lib/Cookie";
import useSWR from "swr";
import { fetcher } from "./fetcher";

const instance = axios.create({
  headers: {
    Token: useSWR("/api/auth/sign-in", fetcher),
  },
});

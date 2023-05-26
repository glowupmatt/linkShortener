import axios from "axios";

type LinkShortenerProps = {
  url: String;
};

export const baseURL = "https://api.shrtco.de/v2/shorten?url=";

const linkShortener = async ({ url }: LinkShortenerProps) => {
  const { data } = await axios.get(`${baseURL}${url},options`);
  return data;
};

export default linkShortener;

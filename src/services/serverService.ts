import httpClient from "../utils/httpClient";

type signProps = {
  username: string;
  password: string;
};

export const signUp = async (user: signProps): Promise<any> => {
  const response = await httpClient.post<any>("/authen/register", user);
  return response.data;
};

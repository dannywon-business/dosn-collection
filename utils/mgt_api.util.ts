// constants
import { MGT_API_BASE_URI } from "@common/constants/api.constants";


interface getApiProps {
  authorization?: any;
  path: string;
}
export const getApi = async (props: getApiProps) => {
  const { authorization, path } = props;

  const headers = authorization ? {
    apikey: "PfmoiKctj04qpw93XCTug6bln81HhYrN",
    "authorization": authorization,
  } : {
    apikey: "PfmoiKctj04qpw93XCTug6bln81HhYrN",
  };

  const response = await fetch(`${MGT_API_BASE_URI}${path}`, {
    method: "GET",
    headers: headers,
  }).then((res) => res.json());

  // console.log('!! response', response);

  return response;
};


interface postApiProps {
  authorization?: any;
  path: string;
  params: {
    [key: string]: any;
  }
};
export const postApi = async (props: postApiProps) => {
  const { authorization, path, params } = props;

  const headers = authorization ? {
    apikey: "PfmoiKctj04qpw93XCTug6bln81HhYrN",
    "Content-Type": "application/json",
    "authorization": authorization
  } : {
    apikey: "PfmoiKctj04qpw93XCTug6bln81HhYrN",
    "Content-Type": "application/json",
  };

  const response = await fetch(`${MGT_API_BASE_URI}${path}`, {
    method: "POST",
    mode: "cors",
    headers: headers,
    body: JSON.stringify(params),
  }).then((res) => res.json());

  // console.log('response', response);

  return response;
};

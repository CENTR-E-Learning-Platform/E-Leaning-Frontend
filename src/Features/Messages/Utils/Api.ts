import { BASE_URL } from "../../../APIs/APIs";

const CHAT_GET_MESSAGES= `${BASE_URL}/Chat/get/messages`;
const CHAT_GET_CONVERSATION= `${BASE_URL}/Chat/get/conversations`;
const CHAT_GET_MY_GROUPS= `${BASE_URL}/Chat/my-groups`;
const CHAT_GROUP_MESSAGES= `${BASE_URL}/Chat/group-messages`;
export {
  CHAT_GET_MESSAGES,
  CHAT_GET_CONVERSATION,
  BASE_URL,
  CHAT_GET_MY_GROUPS,
  CHAT_GROUP_MESSAGES
};
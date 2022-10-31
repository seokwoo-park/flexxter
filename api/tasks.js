const ENDPOINT_URL = "https://flexxter.de/Tasks/";

const FETCH_RESPONSE = {
  tasks: [
    {
      id: 1,
      title: "Paint the wall",
      description: "Please paint all the walls in white color",
      checked: true,
    },
    {
      id: 2,
      title: "Clean the site",
      description:
        "Please make sure you cleaned the construction site before leaving",
      checked: false,
    },
  ],
};

const SAVE_RESPONSE = {
  status: "success",
};

const mock_fetch = async (url, { method }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON.stringify(FETCH_RESPONSE));
    }, 1500);
  });
};

const mock_post = async (url, { method, body }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON.stringify(SAVE_RESPONSE));
    }, 1500);
  });
};

export const fetchTasks = async (projectID) => {
  const res = await mock_fetch(`${ENDPOINT_URL}/Get?project-id=${projectID}`, {
    method: "GET",
  });

  return res;
};

export const saveTasks = async ({ projectID, taskID, checked }) => {
  const res = await mock_post(`${ENDPOINT_URL}/Save`, {
    method: "POST",
    body: {
      "project-id": projectID,
      "task-id": taskID,
      checked,
    },
  });

  return res;
};

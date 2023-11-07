const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     organization: "org-FW7lpNS94u3yr0Qgs9n1p7Po",
//     apiKey: "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",
// });
const apiKey = "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"
const openai = new OpenAIApi({ apiKey: apiKey });
// const response = await openai.listEngines();

module.exports = { openai };

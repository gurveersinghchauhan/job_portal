import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {

    console.log("file",file);
    const parser = new DataUriParser();
    const extName = path.extname(file?.originalname).toString();

    console.log("parser",parser);
    console.log("ext",extName)
    return parser.format(extName,file.buffer);
}

export default getDataUri;
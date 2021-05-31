import { formatResponse } from "../../helpers";

const main = async (event: any) => {
    console.log("EVENT***", event)

    return formatResponse(200, {
        message: 'Procurando ainda...'
    })
}

export const handler = main;
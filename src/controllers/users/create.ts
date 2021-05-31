import { handlerWrapper } from "../../helpers"

const main = async (event: any) => {
    console.log("EVENT***", event)

    return {
        message: 'rota criar usuario ;)'
    }
}

export const handler = handlerWrapper(main)
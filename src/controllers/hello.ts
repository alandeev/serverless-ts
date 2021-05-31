import handlerWrapper from "../helpers/handler-wrapper"

const main = async (event: any) => {

    return {
        message: 'Tudo correndo corretamente! :)'
    }
}

export const handler = handlerWrapper(main)
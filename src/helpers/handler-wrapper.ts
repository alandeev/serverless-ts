import formatResponse from "./format-response";

type CallbackFunction = (event: any) => Promise<any>

export default (fn: CallbackFunction) => {
    return async (event: any) => {
        try{
            const { body } = event;
            if(body) {
                event.body = JSON.parse(body);
            }
            const result = await fn(event);

            return formatResponse(200, result);
        }catch(error) {
            return formatResponse(500, {
                status: 500,
                message: 'Server internal error'
            })
        }
    }
}
const formatResponse = (status: number, body: any) => ({
    statusCode: status,
    body: JSON.stringify(body)
})

export default (fn) => {
    return async (event) => {
        try{
            const { body } = event;
            if(body) {
                event.body = JSON.parse(body);
            }
            const result = fn(event);

            return formatResponse(200, result);
        }catch(error) {
            return formatResponse(500, {
                status: 500,
                message: 'Server internal error'
            })
        }
    }
}
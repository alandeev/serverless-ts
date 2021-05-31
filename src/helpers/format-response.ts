export default (status: number, body: any) => ({
    statusCode: status,
    body: JSON.stringify(body)
})

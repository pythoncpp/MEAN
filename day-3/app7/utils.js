
function createResponse(error, result) {
    const response = {}
    if (error) {
        response['status'] = 'error'
        response['error'] = error
    } else {
        response['status'] = 'success'
        response['data'] = result
    }

    return response
}

module.exports = {
    createResponse: createResponse
}

function createResponse(error, data) {
    const result = {}
    if (error) {
        // error
        result['status'] = 'error'
        result['error'] = error
    } else {
        // success
        result['status'] = 'success'
        result['data'] = data
    }

    return result
}

module.exports = {
    createResponse: createResponse
}
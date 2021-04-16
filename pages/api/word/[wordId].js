import connectToDb from "../../../middleware/mongoose/mongoose"
import vocabModel from "../../../middleware/mongoose/models"

export async function getWord(wordId) {
await connectToDb()
let response = await vocabModel.find({wordId: wordId})
if(response.length === 0) {
    return {found: "none"}
}
return response
}

export default async function handler(req, res) {
    let { wordId } = req.query
    let response = await getWord(wordId)
    await res.json(response)
}


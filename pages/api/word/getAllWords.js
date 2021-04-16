import vocabModel from "../../../middleware/mongoose/models"
import connectToDb from "../../../middleware/mongoose/mongoose"

export async function getAllWords() {
await connectToDb()
let response = await vocabModel.find({})
return response
}

export default async function handler(req, res) {
let response = await getAllWords()
res.json(response)
}

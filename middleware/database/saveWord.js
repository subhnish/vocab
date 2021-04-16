import getFromOxford from "../../Api/oxfordBase";
import vocabModel from "../mongoose/models";
import connectToDb from "../mongoose/mongoose";

export default async function saveWord(word) {
    try {
        await connectToDb();
        let resFromOxford = await getFromOxford(`/entries/en/${word}`)
        if (resFromOxford.error) return { error: "Not Found" }
        let foundWords = await vocabModel.find({ wordId: resFromOxford.id }, async (err) => {
            if (err) throw err
        })
        if (foundWords.length === 0) {
            let { id: wordId, results, word } = resFromOxford
            let newDoc = vocabModel({ wordId, results, word })
            await newDoc.save()
            return {"status": "Added"}
        }
        else return { error: "Word Already Exist" }
    }
    catch (err) {
        throw err
    }
}
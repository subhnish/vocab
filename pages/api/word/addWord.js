import saveWord from "../../../middleware/database/saveWord"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const addWord = await saveWord(req.body.word)
        if(addWord.error) {
            res.end(JSON.stringify({"error": "failed to add"}))
            return
        }
        res.end(JSON.stringify({"status": "done"}))
    } 
}

import { quizCsv } from "../Services/quizCsv"

export const useCsv = (quizId: number) => {
    const quizCsvDownload = async () => {
        try {
            const response = await quizCsv(quizId);
            const data = response?.data || response;
            
            const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            
            link.href = url;
            link.setAttribute('download', 'quiz_results.csv');
            document.body.appendChild(link);
            
            link.click();
            
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.log(err);
        }
    }
    
    return { quizCsvDownload }
}
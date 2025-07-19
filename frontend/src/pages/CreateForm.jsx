import { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function CreateForm() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState(['']);
  const navigate = useNavigate();

  const addQuestion = () => setQuestions([...questions, '']);
  const updateQuestion = (value, index) => {
    const newQs = [...questions];
    newQs[index] = value;
    setQuestions(newQs);
  };

  const handleSubmit = async () => {
    const formatted = questions.map(q => ({ questionText: q }));
    await API.post('/forms', { title, questions: formatted });
    navigate('/dashboard');
  };

//  return (
//   <div className="p-6 max-w-2xl mx-auto">
//     <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">📝 Create Feedback Form</h2>

//     <input
//       className="mb-5 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//       placeholder="Form Title"
//       onChange={e => setTitle(e.target.value)}
//     />

//     {questions.map((q, idx) => (
//       <input
//         key={idx}
//         className="mb-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//         placeholder={`Question ${idx + 1}`}
//         value={q}
//         onChange={e => updateQuestion(e.target.value, idx)}
//       />
//     ))}

//     <div className="flex gap-3 mt-4 mb-6">
//       <button
//         className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white transition font-medium"
//         onClick={addQuestion}
//       >
//         + Add Question
//       </button>
//     </div>

//     <button
//       className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
//       onClick={handleSubmit}
//     >
//       ✅ Create Form
//     </button>
//   </div>
// );
return(
  <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden max-w-2xl mx-auto p-8">
  <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text">
    📝 Create Feedback Form
  </h2>

  <input
    className="mb-5 w-full px-4 py-3 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-300 placeholder-gray-400 text-gray-700 text-sm"
    placeholder="Form Title"
    onChange={e => setTitle(e.target.value)}
  />

  {questions.map((q, idx) => (
    <input
      key={idx}
      className="mb-3 w-full px-4 py-3 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-300 placeholder-gray-400 text-gray-700 text-sm"
      placeholder={`Question ${idx + 1}`}
      value={q}
      onChange={e => updateQuestion(e.target.value, idx)}
    />
  ))}

  <div className="flex gap-3 mt-4 mb-6">
    <button
      className="px-5 py-2.5 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 text-indigo-700 font-semibold rounded-xl border border-indigo-200 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all duration-200"
      onClick={addQuestion}
    >
      + Add Question
    </button>
  </div>

  <button
    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 focus:ring-4 focus:ring-indigo-200 text-sm"
    onClick={handleSubmit}
  >
    ✅ Create Form
  </button>
</div>
);


}

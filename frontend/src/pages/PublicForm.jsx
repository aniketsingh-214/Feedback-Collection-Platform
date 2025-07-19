import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../utils/api';

export default function PublicForm() {
  const { formId } = useParams();
  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    API.get(`/forms/public/${formId}`).then(res => {
      setForm(res.data);
      setAnswers(Array(res.data.questions.length).fill(''));
    });
  }, [formId]);

  const submit = async () => {
    await API.post(`/forms/submit/${formId}`, { answers });
    alert('Feedback submitted!');
  };

  return form && (
 <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden max-w-2xl mx-auto p-8 mt-16">
    <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
      📝 {form.title}
    </h2>

    {form.questions.map((q, i) => (
      <div key={i} className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {q.questionText}
        </label>
        <input
          className="w-full px-4 py-3 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-300 placeholder-gray-400 text-gray-700 text-sm"
          value={answers[i]}
          onChange={e => {
            const newAns = [...answers];
            newAns[i] = e.target.value;
            setAnswers(newAns);
          }}
        />
      </div>
    ))}

    <button
      className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 focus:ring-4 focus:ring-indigo-200 text-sm"
      onClick={submit}
    >
      ✅ Submit Feedback
    </button>
  </div>
);

}

import { useEffect, useState } from 'react';
import API from '../utils/api';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [forms, setForms] = useState([]);
  
  useEffect(() => {
    API.get('/forms/my').then(res => setForms(res.data));
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 p-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Manage and monitor your feedback forms</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{forms.length}</p>
                <p className="text-gray-600 text-sm">Total Forms</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {forms.reduce((total, form) => total + (form.responses?.length || 0), 0)}
                </p>
                <p className="text-gray-600 text-sm">Total Responses</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {forms.length > 0 ? Math.round(forms.reduce((total, form) => total + (form.responses?.length || 0), 0) / forms.length) : 0}
                </p>
                <p className="text-gray-600 text-sm">Avg. Responses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-extrabold mb-6 text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text ">📋 My Feedback Forms</h2>
            </div>

            {forms.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No forms created yet</h3>
                <p className="text-gray-500 mb-8 text-lg">Get started by creating your first feedback form</p>
                <Link
                  to="/create"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Create Your First Form
                </Link>
              </div>
            ) : (
              forms.map(form => (
                <div
                  key={form._id}
                  className="group bg-gradient-to-r from-white via-gray-50/50 to-white border border-gray-200/70 bg-white shadow-lg p-6 rounded-2xl mb-4 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-700 mb-1 group-hover:text-indigo-600 transition-colors duration-200">{form.title}</h3>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                              </svg>
                              <p className="text-sm text-gray-500 font-medium">{form.responses.length} responses</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-sm text-gray-500">Active</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href={`/public/${form._id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 text-indigo-700 font-medium rounded-xl border border-indigo-200 hover:border-indigo-300 transition-all duration-200 group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      🔗 Public Link
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Efficiently manage your feedback forms with our professional admin dashboard
          </p>
        </div>
      </div>
    </div>
  );
}
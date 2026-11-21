import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Shield,
  LayoutDashboard,
  Briefcase,
  Users,
  MessageSquare,
  FileText,
  Mail,
  Send,
  Trash2,
  Plus,
  CheckCircle2,
  LogOut,
  ExternalLink,
  Lock,
} from 'lucide-react';
import api from '../api/client';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function AdminPage() {
  const { user, isAuthenticated, login, logout, loading: authLoading } = useAuth();
  const { toast } = useToast();

  // Login form state
  const [email, setEmail] = useState('admin@jishnuinfotech.com');
  const [password, setPassword] = useState('admin123Password!');
  const [loginLoading, setLoginLoading] = useState(false);

  // Dashboard state
  const [activeTab, setActiveTab] = useState('overview');
  const [overview, setOverview] = useState(null);
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  // New Project Form Modal State
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'Cloud & DevOps',
    client: '',
    summary: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/jishnu-infotech',
    technologies: 'React, Node.js, PostgreSQL',
  });

  // Fetch admin data
  const fetchDashboardData = async () => {
    setDataLoading(true);
    try {
      const [ovRes, projRes, teamRes, testRes, postRes, cntRes, subRes] = await Promise.all([
        api.get('/admin/overview'),
        api.get('/projects'),
        api.get('/team'),
        api.get('/testimonials'),
        api.get('/blog/admin/all'),
        api.get('/contact'),
        api.get('/newsletter'),
      ]);

      if (ovRes.data?.data) setOverview(ovRes.data.data);
      if (projRes.data?.data) setProjects(projRes.data.data);
      if (teamRes.data?.data) setTeam(teamRes.data.data);
      if (testRes.data?.data) setTestimonials(testRes.data.data);
      if (postRes.data?.data) setPosts(postRes.data.data);
      if (cntRes.data?.data) setContacts(cntRes.data.data);
      if (subRes.data?.data) setSubscribers(subRes.data.data);
    } catch (err) {
      console.warn('Dashboard fetch issue:', err.message);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      await login(email, password);
      toast('Welcome back, Administrator!', 'success');
    } catch (err) {
      toast(err.response?.data?.message || 'Invalid administrator credentials.', 'error');
    } finally {
      setLoginLoading(false);
    }
  };

  // Handlers for deleting items
  const handleDeleteProject = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    try {
      await api.delete(`/projects/${id}`);
      setProjects((prev) => prev.filter((p) => p.id !== id));
      toast('Project removed successfully.', 'success');
    } catch (err) {
      toast('Failed to delete project.', 'error');
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...newProject,
        technologies: newProject.technologies.split(',').map((t) => t.trim()),
      };
      const res = await api.post('/projects', payload);
      if (res.data?.success) {
        setProjects((prev) => [res.data.data, ...prev]);
        toast('Project published to portfolio!', 'success');
        setNewProject({
          title: '',
          category: 'Cloud & DevOps',
          client: '',
          summary: '',
          description: '',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          liveUrl: 'https://example.com',
          githubUrl: 'https://github.com/jishnu-infotech',
          technologies: 'React, Node.js, PostgreSQL',
        });
      }
    } catch (err) {
      toast(err.response?.data?.message || 'Failed to create project.', 'error');
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await api.delete(`/contact/${id}`);
      setContacts((prev) => prev.filter((c) => c.id !== id));
      toast('Contact submission deleted.', 'success');
    } catch (err) {
      toast('Failed to remove submission.', 'error');
    }
  };

  const handleToggleContactStatus = async (id, currentStatus) => {
    const nextStatus = currentStatus === 'unread' ? 'replied' : 'unread';
    try {
      await api.patch(`/contact/${id}/status`, { status: nextStatus });
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: nextStatus } : c))
      );
      toast(`Status updated to ${nextStatus}`, 'success');
    } catch (err) {
      toast('Failed to update status.', 'error');
    }
  };

  const handleDeleteSubscriber = async (id) => {
    try {
      await api.delete(`/newsletter/${id}`);
      setSubscribers((prev) => prev.filter((s) => s.id !== id));
      toast('Subscriber removed.', 'success');
    } catch (err) {
      toast('Failed to remove subscriber.', 'error');
    }
  };

  if (authLoading) {
    return (
      <div className="pt-40 text-center text-slate-500">
        Verifying administrator session...
      </div>
    );
  }

  // Not Logged In - Render Login Portal
  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Admin Authentication | Jishnu Infotech</title>
        </Helmet>
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
          <div className="max-w-md w-full p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-deepBlue text-brand-orange flex items-center justify-center shadow-lg mb-4">
                <Lock className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Admin Control Center
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Jishnu Infotech Production Management
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                  Admin Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                  Master Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>

              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/40 text-[11px] text-slate-600 dark:text-slate-300">
                <strong>Default Seed Admin Credentials:</strong><br />
                Email: <code className="text-brand-brightBlue">admin@jishnuinfotech.com</code><br />
                Password: <code className="text-brand-orange">admin123Password!</code>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-lightOrange shadow-lg hover:shadow-orange-500/25 transition-all disabled:opacity-50"
              >
                {loginLoading ? 'Authenticating...' : 'Sign In as Administrator'}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  // Logged In - Render Full Management Dashboard
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Jishnu Infotech</title>
      </Helmet>

      <div className="pt-28 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
                <Shield className="w-4 h-4" />
                <span>Executive Management Console</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                Jishnu Infotech Portal Operations
              </h1>
              <p className="text-xs text-slate-500">
                Signed in as <strong>{user?.name}</strong> ({user?.email}) &bull; Active DB: {overview?.databaseType || 'Ready'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchDashboardData}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
              >
                Refresh Data
              </button>
              <button
                onClick={logout}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-rose-500 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 hover:bg-rose-100"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 my-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            {[
              { id: 'overview', label: 'Overview Metrics', icon: LayoutDashboard },
              { id: 'projects', label: `Projects (${projects.length})`, icon: Briefcase },
              { id: 'contacts', label: `Inquiries (${contacts.length})`, icon: MessageSquare },
              { id: 'subscribers', label: `Subscribers (${subscribers.length})`, icon: Mail },
              { id: 'team', label: `Team (${team.length})`, icon: Users },
              { id: 'blog', label: `Blog (${posts.length})`, icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { label: 'Active Services', count: overview?.servicesCount || 6, color: 'text-brand-brightBlue' },
                  { label: 'Portfolio Projects', count: overview?.projectsCount || projects.length, color: 'text-brand-orange' },
                  { label: 'Inquiries Received', count: overview?.contactsCount || contacts.length, color: 'text-emerald-500' },
                  { label: 'Newsletter Subscribers', count: overview?.subscribersCount || subscribers.length, color: 'text-purple-500' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-md">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">{stat.label}</span>
                    <div className={`text-3xl sm:text-4xl font-extrabold font-heading mt-2 ${stat.color}`}>
                      {stat.count}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Inquiries Preview */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-lg">
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-4">
                  Latest Inbound Client Inquiries
                </h3>
                <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                  {contacts.slice(0, 5).map((cnt) => (
                    <div key={cnt.id} className="py-3 flex items-center justify-between gap-4">
                      <div>
                        <div className="font-semibold text-sm text-slate-900 dark:text-white">
                          {cnt.name} &bull; <span className="text-xs text-brand-orange font-normal">{cnt.email}</span>
                        </div>
                        <div className="text-xs text-slate-500 truncate max-w-xl">{cnt.message}</div>
                      </div>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${cnt.status === 'unread' ? 'bg-amber-500/20 text-amber-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                        {cnt.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Projects Management */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
              {/* Add Project Form */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-lg">
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-brand-orange" />
                  Add New Portfolio Case Study
                </h3>
                <form onSubmit={handleCreateProject} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-400 block mb-1">Project Title</label>
                    <input
                      type="text"
                      placeholder="e.g. QuantumLedger: High-Frequency Settlement"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      required
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-400 block mb-1">Category</label>
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    >
                      <option value="Cloud & DevOps">Cloud & DevOps</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="SaaS Engineering">SaaS Engineering</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-400 block mb-1">Client Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Global"
                      value={newProject.client}
                      onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                      required
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-400 block mb-1">Technologies (comma-separated)</label>
                    <input
                      type="text"
                      placeholder="React, TypeScript, AWS, PostgreSQL"
                      value={newProject.technologies}
                      onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                      required
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-slate-400 block mb-1">Summary</label>
                    <textarea
                      rows={2}
                      placeholder="Brief 1-2 sentence description of deliverables..."
                      value={newProject.summary}
                      onChange={(e) => setNewProject({ ...newProject, summary: e.target.value })}
                      required
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl font-semibold text-white bg-brand-orange hover:bg-brand-lightOrange text-xs shadow-md"
                    >
                      Publish Project
                    </button>
                  </div>
                </form>
              </div>

              {/* Projects List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-md flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-brand-orange uppercase">{proj.category}</span>
                      <h4 className="font-bold text-base text-slate-900 dark:text-white mt-1">{proj.title}</h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">{proj.summary}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                      <span className="text-xs text-slate-400">{proj.client}</span>
                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Contact Inquiries */}
          {activeTab === 'contacts' && (
            <div className="space-y-4">
              {contacts.map((cnt) => (
                <div key={cnt.id} className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">{cnt.name}</h4>
                      <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full ${cnt.status === 'unread' ? 'bg-amber-500/20 text-amber-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                        {cnt.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      <strong>Email:</strong> {cnt.email} &bull; <strong>Phone:</strong> {cnt.phone || 'N/A'} &bull; <strong>Scope:</strong> {cnt.subject}
                    </p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 pt-2 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200/50 dark:border-slate-800/50">
                      {cnt.message}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleToggleContactStatus(cnt.id, cnt.status)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200"
                    >
                      {cnt.status === 'unread' ? 'Mark as Replied' : 'Mark as Unread'}
                    </button>
                    <button
                      onClick={() => handleDeleteContact(cnt.id)}
                      className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: Newsletter Subscribers */}
          {activeTab === 'subscribers' && (
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-md">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">
                Subscribed Email Addresses ({subscribers.length})
              </h3>
              <div className="divide-y divide-slate-100 dark:divide-slate-700">
                {subscribers.map((sub) => (
                  <div key={sub.id} className="py-3 flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium text-slate-900 dark:text-white">{sub.email}</span>
                      <span className="text-xs text-slate-400 block">Subscribed: {new Date(sub.subscribedAt).toLocaleDateString()}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteSubscriber(sub.id)}
                      className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Team */}
          {activeTab === 'team' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((t) => (
                <div key={t.id} className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-md">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-3" />
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-xs text-brand-orange font-semibold">{t.role}</p>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">{t.bio}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 6: Blog Articles */}
          {activeTab === 'blog' && (
            <div className="space-y-4">
              {posts.map((p) => (
                <div key={p.id} className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-brand-brightBlue uppercase">{p.category}</span>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">{p.title}</h4>
                    <p className="text-xs text-slate-400">By {p.authorName} &bull; {p.readTime}</p>
                  </div>
                  <a
                    href={`/blog/${p.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-500 hover:text-brand-orange"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

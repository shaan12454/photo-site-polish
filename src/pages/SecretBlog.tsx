import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, PenLine, Calendar, ArrowLeft, Plus, Trash2, Edit, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

interface BlogPost { id: string; title: string; content: string; date: string; }

const STORAGE_KEY = 'shaan_secret_blog_posts';

const defaultPosts: BlogPost[] = [
  { id: '1', title: 'Welcome to My Secret Blog! 🎉', content: `Hey! If you're reading this, you found my secret corner of the internet. This is where I share my personal thoughts, stories, and random stuff that doesn't fit anywhere else.\n\nI created this hidden space because sometimes you just need a place to be yourself without the whole world watching. It's like having a diary, but cooler because it's on a website I built myself!\n\nStay tuned for more updates about my coding journey, random thoughts, and maybe some embarrassing stories. Who knows? 😄`, date: '2025-02-04' },
  { id: '2', title: 'Why I Started Coding', content: `I remember the first time I wrote code that actually worked. It was a simple Python program that printed "Hello, World!" but it felt like magic.\n\nThat moment changed everything for me. I realized that with just a keyboard and some logic, I could create things from nothing. It's like being a wizard, but instead of wands, we use code.\n\nNow every time I build something new, I get that same rush of excitement. Whether it's a website, a game, or just a silly script - there's nothing quite like seeing your ideas come to life on screen.`, date: '2025-02-03' }
];

function loadPosts(): BlogPost[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) { try { return JSON.parse(stored); } catch { return defaultPosts; } }
  return defaultPosts;
}
function savePosts(posts: BlogPost[]) { localStorage.setItem(STORAGE_KEY, JSON.stringify(posts)); }

export default function SecretBlog() {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    const auth = sessionStorage.getItem('secret_auth');
    if (auth !== 'true') { navigate('/'); } else { setIsAuthorized(true); setPosts(loadPosts()); }
  }, [navigate]);

  const handleLogout = () => { sessionStorage.removeItem('secret_auth'); navigate('/'); };
  const handleCreatePost = () => { setIsCreating(true); setEditTitle(''); setEditContent(''); };
  const handleSaveNewPost = () => {
    if (!editTitle.trim() || !editContent.trim()) return;
    const newPost: BlogPost = { id: Date.now().toString(), title: editTitle, content: editContent, date: new Date().toISOString().split('T')[0] };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts); savePosts(updatedPosts); setIsCreating(false); setEditTitle(''); setEditContent('');
  };
  const handleEditPost = (post: BlogPost) => { setIsEditing(post.id); setEditTitle(post.title); setEditContent(post.content); };
  const handleSaveEdit = () => {
    if (!editTitle.trim() || !editContent.trim() || !isEditing) return;
    const updatedPosts = posts.map(p => p.id === isEditing ? { ...p, title: editTitle, content: editContent } : p);
    setPosts(updatedPosts); savePosts(updatedPosts); setIsEditing(null); setEditTitle(''); setEditContent('');
  };
  const handleDeletePost = (id: string) => { const updatedPosts = posts.filter(p => p.id !== id); setPosts(updatedPosts); savePosts(updatedPosts); };
  const handleCancelEdit = () => { setIsEditing(null); setIsCreating(false); setEditTitle(''); setEditContent(''); };

  if (!isAuthorized) return null;

  return (
    <>
      <SEOHead title="Secret Blog - Shaan Taji" description="My personal secret blog" />
      <div className="min-h-screen bg-background pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <ArrowLeft className="w-4 h-4" />Back to Home
              </Link>
              <div className="flex gap-2">
                <Button variant="default" size="sm" onClick={handleCreatePost}><Plus className="w-4 h-4 mr-1 sm:mr-2" />New Post</Button>
                <Button variant="outline" size="sm" onClick={handleLogout}><Lock className="w-4 h-4 mr-1 sm:mr-2" />Lock & Exit</Button>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm"><Lock className="w-4 h-4" />Secret Area</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">My Secret Blog</h1>
              <p className="text-base sm:text-lg text-muted-foreground">Personal stories, thoughts, and random stuff ✨</p>
            </div>
          </motion.div>

          <Dialog open={isCreating || isEditing !== null} onOpenChange={(open) => !open && handleCancelEdit()}>
            <DialogContent className="sm:max-w-2xl mx-4">
              <DialogHeader><DialogTitle>{isCreating ? 'Create New Post' : 'Edit Post'}</DialogTitle></DialogHeader>
              <div className="space-y-4 py-4">
                <div><label className="text-sm font-medium mb-2 block">Title</label><Input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder="Enter post title..." /></div>
                <div><label className="text-sm font-medium mb-2 block">Content</label><Textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} placeholder="Write your story..." className="min-h-[200px] sm:min-h-[300px]" /></div>
              </div>
              <DialogFooter className="gap-2">
                <Button variant="outline" onClick={handleCancelEdit}><X className="w-4 h-4 mr-2" />Cancel</Button>
                <Button onClick={isCreating ? handleSaveNewPost : handleSaveEdit}><Save className="w-4 h-4 mr-2" />Save Post</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="space-y-6 sm:space-y-8">
            {posts.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <PenLine className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No posts yet. Click "New Post" to create your first story!</p>
              </div>
            ) : posts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <article className="p-5 sm:p-8 rounded-2xl bg-muted/30 border border-border relative group">
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-1 sm:gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" onClick={() => handleEditPost(post)} className="w-8 h-8 sm:w-9 sm:h-9"><Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive w-8 h-8 sm:w-9 sm:h-9" onClick={() => handleDeletePost(post.id)}><Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></Button>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 pr-16 sm:pr-0">{post.title}</h2>
                  <div>
                    {post.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 last:mb-0 text-sm sm:text-base">{paragraph}</p>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-xl border border-dashed border-border text-center">
            <PenLine className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 text-muted-foreground" />
            <p className="text-xs sm:text-sm text-muted-foreground">Posts are saved to your browser's local storage.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SECRET_PASSPHRASE = '12sha';
const REQUIRED_CLICKS = 5;

export function SecretTrigger() {
  const [clickCount, setClickCount] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [passphrase, setPassphrase] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= REQUIRED_CLICKS) {
      setShowDialog(true);
      setClickCount(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passphrase === SECRET_PASSPHRASE) {
      sessionStorage.setItem('secret_auth', 'true');
      setShowDialog(false);
      setPassphrase('');
      navigate('/secret');
    } else {
      setError('Wrong passphrase. Try again!');
      setPassphrase('');
    }
  };

  return (
    <>
      <button onClick={handleClick} className="text-[10px] text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors cursor-default select-none" aria-label="Hidden element">···</button>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>🔐 Secret Area</DialogTitle>
            <DialogDescription>Enter the passphrase to continue</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="password" placeholder="Enter passphrase..." value={passphrase} onChange={(e) => { setPassphrase(e.target.value); setError(''); }} autoFocus />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full">Enter</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

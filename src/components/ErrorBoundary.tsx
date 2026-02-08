import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; error?: Error; }

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-destructive/10">
                <AlertCircle className="w-12 h-12 text-destructive" />
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-light tracking-wide">Something went wrong</h1>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                An unexpected error occurred. Please try refreshing the page.
              </p>
            </div>
            <Button onClick={this.handleReset} className="font-light tracking-wide">Return Home</Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-lg font-medium">Vure Sai Sashank</p>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

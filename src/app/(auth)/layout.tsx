"use client";

export const AuthLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
  }) => {
  
    
  return <section>{children}</section>;
};

export default AuthLayout;

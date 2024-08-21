interface Container {
  children: React.ReactNode;
}
function Container({ children }: Container) {
  return <div className="container mx-auto px-32">{children}</div>;
}
export default Container;

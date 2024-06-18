export const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center h-20">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
    </div>
  );
};

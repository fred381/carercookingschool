export default function GuideCallout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-4 border-hg-green bg-hg-sagelight rounded-r-lg p-4 sm:p-5 my-4">
      <h4 className="font-serif text-lg text-hg-darkgreen mb-2">{title}</h4>
      <div className="text-base leading-relaxed text-hg-darkgreen/90 space-y-3">
        {children}
      </div>
    </div>
  );
}

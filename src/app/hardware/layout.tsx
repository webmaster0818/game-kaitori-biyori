import SectionList from '@/components/SectionList';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SectionList section="hardware" name="ハード別" />
    </>
  );
}

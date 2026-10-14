import SectionList from '@/components/SectionList';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SectionList section="review" name="買取業者レビュー" />
    </>
  );
}

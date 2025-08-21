import { render, screen } from '@testing-library/react';
import ProjectDetail, { getStaticPaths, getStaticProps } from '@/pages/projects/[slug]';

describe('Project detail', () => {
  it('getStaticPaths returns paths', async () => {
    const { paths, fallback } = await getStaticPaths({} as any);
    expect(Array.isArray(paths)).toBe(true);
    expect(fallback).toBe(false);
  });

  it('renders a project from getStaticProps', async () => {
    const ctx = { params: { slug: 'muur-verven' } } as any;
    const props = await getStaticProps(ctx) as any;
    render(<ProjectDetail {...props.props} />);
    expect(screen.getByText(/Muur verven/i)).toBeInTheDocument();
    expect(screen.getByText(/Stappenplan/i)).toBeInTheDocument();
  });
});

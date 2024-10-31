export default function Page() {
  return (
    <div className='content text-slate-800'>
      <h1 className='text-3xl text-slate-800 mt-4 mb-2 font-serif'>
        Accessibility
      </h1>
      <p>
        If you encounter any accessibility-related issues related to your use of
        our site, it is likely because of our jank code architecture.
        Unfortunately, our programming team is ill equipped to fix these issues,
        even if some of them may be pressing Diversity, Equity, and Inclusion
        (DEI) concerns. We recommend you add any accessibility fixes yourself by
        submitting a{' '}
        <a href='https://github.com/youwen5/eeXiv/pull/new'>pull request</a> on
        GitHub.
      </p>
      <h2 className='text-2xl text-slate-800 mt-6 mb-1 font-serif'>
        Supported Hardware
      </h2>
      <p>
        It has also come to our attention that we may not be able to support
        low-spec devices such as old phones, computers, or other devices with
        little RAM. This is because we load the entire database of documents,
        authors, topics, affiliations, and other data/metadata directly into
        memory via JavaScript. As a result, the site may be slow or unusable on
        low-spec devices and it can only get worse. If you would like to remedy
        this issue, we again recommend you open a{' '}
        <a href='https://github.com/youwen5/eeXiv/pull/new'>pull request</a> and
        port our in memory database to an actual remote database.
      </p>
    </div>
  )
}

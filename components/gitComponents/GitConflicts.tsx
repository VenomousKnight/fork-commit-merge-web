const GitConflicts = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/git.png')" }}>
        <div className="mb-10 flex flex-col items-center justify-center p-24 text-center text-white">
          <h1 className="text-4xl font-bold">Git Conflicts</h1>
          <p className="mt-4 text-xl">
            Managing and resolving merge conflicts in Git
          </p>
        </div>
      </div>
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">What are Git Conflicts?</h2>
        <p className="mb-4">
          Git conflicts occur when there are competing changes on the same lines
          of a file, or when one developer has deleted a file while another
          developer was modifying it. Conflicts usually arise during the merging
          process and must be manually resolved before the merge can be
          completed.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Do Git Conflicts Occur?</h2>
        <p className="mb-6">
          Conflicts happen mainly due to parallel or divergent work between team
          members. This is common in collaborative development environments. Git
          can auto-merge changes unless two developers modify the same part of a
          file, or if a file is deleted and modified simultaneously. In such
          cases, manual conflict resolution is required.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          How to Resolve Git Conflicts
        </h2>
        <ul className="mb-6">
          <li>
            - Identify the conflicting files: <code>git status</code>
          </li>
          <li>
            - Open the conflicting file and look for conflict markers (
            <code>&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>,{" "}
            <code>&gt;&gt;&gt;&gt;&gt;</code>)
          </li>
          <li>- Decide which changes to keep and remove conflict markers</li>
          <li>- Save the file after resolving the conflict</li>
          <li>
            - Add the resolved file: <code>git add [file-name]</code>
          </li>
          <li>
            - Commit the changes: <code>git commit</code>
          </li>
        </ul>

        <h4 className="text-2xl font-bold my-4">
          Git Conflict Best Practices and Guidelines
        </h4>
        <ul>
          <li>
            - Always pull the latest changes before starting to work on a task.
          </li>
          <li>- Communicate with your team to minimize conflicts.</li>
          <li>
            - Resolve conflicts as soon as they occur to avoid blocking others.
          </li>
          <li>
            - Use tools like Git GUIs or IDE integrations to make conflict
            resolution easier.
          </li>
        </ul>

        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://git-scm.com/docs/git-merge#_how_conflicts_are_presented"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Git - Official Conflict Documentation
        </a>
      </div>
    </div>
  );
};

export default GitConflicts;

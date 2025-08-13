// export all connections from linkedin
function exportLinkedInContacts() {
    const contacts = getLinkedInContacts();
    const csv = convertToCSV(contacts);
    downloadCSV(csv, 'linkedin_contacts.csv');
}

function getLinkedInContacts() {
    // This function should interact with connections page (https://www.linkedin.com/mynetwork/invite-connect/connections/)
    // and scrape the contacts data.
    // it will process the html records and keep clicking the "Load more" button until all contacts are loaded.
    /**
     * Example structure of the single connection data:
    <div class="_40d6ef26" data-view-name="connections-list" data-display-contents="true"><div class="_079fe03b _45efc464 ed7db5ff _54fe06e8 _185492b4 _63d07978 _82f99f43 _6dda4091 _74264788 _558352ea" componentkey="auto-component-11e4bc4a-95b8-404e-b833-e0b4a9653268"><a tabindex="0" class="e8d98bf4 b8daa724 _53f203c6 _9ba7d9a4 _6eee948c a38d78e6 d225d45e _8e5b0f4b ca3bd15f _185492b4" href="https://www.linkedin.com/in/rahul-y-4861b2317/" componentkey="c4c366ce-d21c-4c1d-9b54-31314f4f6281" data-view-name="connections-profile" style="height: 7.2rem; width: 7.2rem;"><figure class="f4f93435 fe7a2fc4 _811216ea b2a966cd _51928b45 e4b556bc" componentkey="c4c366ce-d21c-4c1d-9b54-31314f4f6281" data-view-name="image"><svg xmlns="http://www.w3.org/2000/svg" id="person-accent-4" aria-hidden="false" viewBox="0 0 128 128" data-token-id="356" class="_2d28c49e e4b556bc _51928b45 _42c63541" fetchPriority="low" aria-label="Rahul Y.’s profile picture" preserveAspectRatio="xMidYMid slice"><g display="var(--svgDisplayLight)"><path fill="#e7e2dc" d="M0 0h128v128H0z"></path><path fill="#788fa5" d="M88.41 84.67a32 32 0 1 0-48.82 0 66.13 66.13 0 0 1 48.82 0"></path><path fill="#9db3c8" d="M88.41 84.67a32 32 0 0 1-48.82 0A66.79 66.79 0 0 0 0 128h128a66.79 66.79 0 0 0-39.59-43.33"></path><path fill="#56687a" d="M64 96a31.93 31.93 0 0 0 24.41-11.33 66.13 66.13 0 0 0-48.82 0A31.93 31.93 0 0 0 64 96"></path></g><g display="var(--svgDisplayDark)"><path fill="#38434f" d="M0 0h128v128H0z"></path><path fill="#788fa5" d="M88.41 84.67a32 32 0 1 0-48.82 0 66.13 66.13 0 0 1 48.82 0"></path><path fill="#9db3c8" d="M88.41 84.67a32 32 0 0 1-48.82 0A66.79 66.79 0 0 0 0 128h128a66.79 66.79 0 0 0-39.59-43.33"></path><path fill="#56687a" d="M64 96a31.93 31.93 0 0 0 24.41-11.33 66.13 66.13 0 0 0-48.82 0A31.93 31.93 0 0 0 64 96"></path></g></svg><img class="_2d28c49e e4b556bc _51928b45 becede58" fetchpriority="low" alt="Rahul Y.’s profile picture" src="https://media.licdn.com/dms/image/v2/D4E03AQHWK7-6INYrLQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720086103326?e=1756944000&amp;v=beta&amp;t=OdFKnX3EH3t8iCa6UOSkIHpFQyc2cuAuNKkO8zx_bi0" data-loaded="true"></figure></a><div class="_7868a18e _811216ea _185492b4 _9cb1c7b8 _82f99f43 _103dba7c _8babe722 dc281083"><div class="_7868a18e _185492b4 _9cb1c7b8 _82f99f43 _103dba7c _8babe722 dc281083"><a tabindex="0" class="b8daa724 _53f203c6 _9ba7d9a4 _6eee948c a38d78e6 d225d45e _8e5b0f4b ca3bd15f _185492b4" href="https://www.linkedin.com/in/rahul-y-4861b2317/" componentkey="7ef28cb3-a21b-445d-aa06-6a07d1f9b005" data-view-name="connections-profile"><div class="_7868a18e _811216ea _185492b4 _9cb1c7b8 _82f99f43 _103dba7c _8babe722 dc281083" componentkey="7ef28cb3-a21b-445d-aa06-6a07d1f9b005"><p class="_88c9b685 c262270a b45da862 _5d21553f _6088f2b0 _4f7e0051 db080247 cf99f898 a2cdc29b _3d814983"><a class="_8e5b0f4b _8863c5fc" href="https://www.linkedin.com/in/rahul-y-4861b2317/">Rahul Y.</a></p><p class="_88c9b685 _7b3dd6fd c593c1fb fafed473 b2a966cd _73d33bb3 b1aafc5a _5d21553f _6088f2b0 _0965240f db080247 cf99f898 a2cdc29b _3d814983">Technical Recruiter at Webologix Ltd/ INC</p></div></a><p class="_88c9b685 _7b3dd6fd _5d21553f _6088f2b0 _0965240f db080247 cf99f898 _0490cd1e _3d814983">Connected on August 7, 2024</p></div></div><div class="_185492b4 _63d07978 _82f99f43 _6dda4091 _8babe722 eba7f5f4"><div class="_185492b4 _63d07978 _82f99f43 _103dba7c _8babe722 ea0995ca"><div class="_40d6ef26" data-view-name="message-button" data-display-contents="true"><a class="_5cbcc026 d225d45e b037d1e6 _8e5b0f4b db080247 _2930c6eb _13489f51 ed06077b c0d99d01 _6dda4091 _2dddbdb8" aria-disabled="false" href="/messaging/compose/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAFBMByYBuMPGKou_Yk8Uh8tQfQ4j4lCLSg0&amp;recipient=ACoAAFBMByYBuMPGKou_Yk8Uh8tQfQ4j4lCLSg0&amp;interop=msgOverlay" componentkey="34e7803d-2eca-4222-9a0a-c78862bf5c64" aria-label="Message"><span class="afa2d06c _811216ea _6dda4091 d225d45e b037d1e6 c0d99d01 _497bdd96 _18927cb7 db080247 _2930c6eb _1532d14d _0e003bcb cdef72c5 _601a013c _9b44c7b8 df373e8d fa0dc514"><span class="_88c9b685 _9f90ee39 _9c03ddb6 _939a926c _7b3dd6fd _3e639f29 _189b49d9 _869609ee _4f7e0051 _8e5b0f4b _3d814983 b451fead">Message</span></span></a></div><button class="_5cbcc026 d225d45e b037d1e6 _8e5b0f4b db080247 _2930c6eb _3339dfd9 ed06077b c0d99d01 _6dda4091 _2dddbdb8" type="button" componentkey="ea0c4343-0fb3-4a0e-a257-b56d00c5dde6" aria-label="Show more actions" data-view-name="connections-remove-connection-dropdown" aria-expanded="false"><span class="afa2d06c _811216ea _6dda4091 d225d45e b037d1e6 c0d99d01 _497bdd96 _18927cb7 db080247 _2930c6eb _1532d14d _0e003bcb _9155edbf f3e676aa _73d08eae _9b44c7b8 df373e8d fc199190 d8ca4c7e"><svg xmlns="http://www.w3.org/2000/svg" id="overflow-web-ios-small" fill="currentColor" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="383" width="16" height="16" class="a3a550b0 _60e7d945 b0c03946 b01a5181 _60b36d65 b24f896e" aria-label="" aria-hidden="true"><path d="M3 9.5A1.5 1.5 0 1 1 4.5 8 1.5 1.5 0 0 1 3 9.5M11.5 8A1.5 1.5 0 1 0 13 6.5 1.5 1.5 0 0 0 11.5 8m-5 0A1.5 1.5 0 1 0 8 6.5 1.5 1.5 0 0 0 6.5 8"></path></svg></span></button></div></div></div></div>
     */
    /** button that needs to be clicked to download more contacts:
     * <button class="_5cbcc026 d225d45e b037d1e6 _8e5b0f4b db080247 _2930c6eb _3339dfd9 ed06077b c0d99d01 _6dda4091 _2dddbdb8 _811216ea" type="button"><span class="afa2d06c _811216ea _6dda4091 d225d45e b037d1e6 c0d99d01 _497bdd96 _18927cb7 db080247 _2930c6eb _1532d14d _0e003bcb _94b3988c f3e676aa _9b44c7b8 df373e8d e2ed87e6"><span class="_88c9b685 _9f90ee39 _9c03ddb6 a52fda5c c262270a cb263f96 _4d3514d6 _14b0cb52 _4f7e0051 _8e5b0f4b _3d814983 b451fead">Load more</span></span></button>
    */
    const contacts = [];
    let hasMore = true;
    let lastHeight = 0;
    const loadMoreButton = document.querySelector('button._5cbcc026.d225d45e.b037d1e6._8e5b0f4b.db080247._2930c6eb._3339dfd9.ed06077b.c0d99d01._6dda4091._2dddbdb8');
    const scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };
    const clickLoadMore = async () => {
        while (hasMore) {
            scrollToBottom();
            await new Promise(resolve => setTimeout(resolve, 2000)); // wait for 2 seconds
            if (document.body.scrollHeight === lastHeight) {
                hasMore = false;
            }
            lastHeight = document.body.scrollHeight;
        }
    };
    const connectionElements = document.querySelectorAll('div[data-view-name="connections-list"] > div');
    connectionElements.forEach(element => {
        const profileLink = element.querySelector('a[href*="/in/"]');
        const nameElement = element.querySelector('p > a');
        const jobTitleElement = element.querySelector('p:not(:first-child)');
        const connectionDateElement = element.querySelector('p._88c9b685._7b3dd6fd');

        if (profileLink && nameElement && jobTitleElement && connectionDateElement) {
            const contact = {
                profileUrl: profileLink.href,
                name: nameElement.textContent.trim(),
                jobTitle: jobTitleElement.textContent.trim(),
                connectionDate: connectionDateElement.textContent.trim()
            };
            contacts.push(contact);
        }
    });
    // Click the "Load more" button until all contacts are loaded
    if (loadMoreButton) {
        loadMoreButton.click();
        clickLoadMore();
    }
    // Return the contacts data
    return contacts;
}

function convertToCSV(data) {
    const headers = Object.keys(data[0]);
    const rows = data.map(row => headers.map(field => JSON.stringify(row[field], replacer)).join(','));
    return [headers.join(','), ...rows].join('\n');
}

function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

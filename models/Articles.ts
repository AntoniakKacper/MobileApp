interface Person {
    firstname: string;
    lastname:string;
    role: string;
}

interface Byline {
    original: string;
    person: Person;
}

interface Headline {
    print_headline: string;
}

interface Multimedia {
    url: string;
}

export interface Article {
    _id: string;
    abstract: string;
    byline: Byline;
    headline: Headline;
    lead_paragraph: string;
    multimedia: Multimedia[];
}
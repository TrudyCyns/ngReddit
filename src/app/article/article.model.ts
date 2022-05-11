export class Article {
  title: string
  link: string
  votes: number

  // the ? after votes means it is optional.
  constructor (title: string, link: string, votes?: number) {
    this.title = title
    this.link = link
    this.votes = votes || 0
  }
  voteUp (): void {
    this.votes += 1
  }
  voteDown (): void {
    this.votes -= 1
  }

  //   domain() is a utility function that extracts the domain from a URL.
  domain (): string {
    try {
      // eg http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1]
      // eg foo.com/path/to/bar
      return domainAndPath.split('/')[0]
    } catch (err) {
      return ''
    }
  }
}

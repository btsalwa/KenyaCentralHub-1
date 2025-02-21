import { members, news, events, galleries } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import type { Member, News, Event, Gallery } from "@shared/schema";
import type { 
  InsertMember, 
  InsertNews, 
  InsertEvent, 
  InsertGallery 
} from "@shared/schema";

export interface IStorage {
  // Member methods
  getMember(id: number): Promise<Member | undefined>;
  createMember(member: InsertMember): Promise<Member>;
  getAllMembers(): Promise<Member[]>;

  // News methods
  getNews(id: number): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;
  getAllNews(): Promise<News[]>;

  // Event methods
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  getAllEvents(): Promise<Event[]>;

  // Gallery methods
  getGallery(id: number): Promise<Gallery | undefined>;
  createGallery(gallery: InsertGallery): Promise<Gallery>;
  getAllGalleries(): Promise<Gallery[]>;
}

export class DatabaseStorage implements IStorage {
  // Member methods
  async getMember(id: number): Promise<Member | undefined> {
    const [member] = await db.select().from(members).where(eq(members.id, id));
    return member;
  }

  async createMember(member: InsertMember): Promise<Member> {
    const [newMember] = await db.insert(members).values(member).returning();
    return newMember;
  }

  async getAllMembers(): Promise<Member[]> {
    return db.select().from(members);
  }

  // News methods
  async getNews(id: number): Promise<News | undefined> {
    const [newsItem] = await db.select().from(news).where(eq(news.id, id));
    return newsItem;
  }

  async createNews(newsItem: InsertNews): Promise<News> {
    const [newNews] = await db.insert(news).values(newsItem).returning();
    return newNews;
  }

  async getAllNews(): Promise<News[]> {
    return db.select().from(news);
  }

  // Event methods
  async getEvent(id: number): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event;
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const [newEvent] = await db.insert(events).values(event).returning();
    return newEvent;
  }

  async getAllEvents(): Promise<Event[]> {
    return db.select().from(events);
  }

  // Gallery methods
  async getGallery(id: number): Promise<Gallery | undefined> {
    const [gallery] = await db.select().from(galleries).where(eq(galleries.id, id));
    return gallery;
  }

  async createGallery(gallery: InsertGallery): Promise<Gallery> {
    const [newGallery] = await db.insert(galleries).values(gallery).returning();
    return newGallery;
  }

  async getAllGalleries(): Promise<Gallery[]> {
    return db.select().from(galleries);
  }
}

export const storage = new DatabaseStorage();
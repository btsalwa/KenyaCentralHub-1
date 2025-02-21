import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const members = pgTable("members", {
  id: serial("id").primaryKey(),
  organizationName: text("organization_name").notNull(),
  acronym: text("acronym"),
  contactPerson: text("contact_person").notNull(),
  designation: text("designation").notNull(),
  address: text("address").notNull(),
  category: text("category").notNull(),
  website: text("website"),
  counties: text("counties").notNull(),
  caProjects: text("ca_projects").notNull(),
  caTechnologies: text("ca_technologies").notNull(),
  partners: text("partners"),
  donors: text("donors")
});

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  date: timestamp("date").notNull(),
  imageUrl: text("image_url")
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: timestamp("date").notNull(),
  location: text("location").notNull()
});

export const galleries = pgTable("galleries", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  imageUrl: text("image_url").notNull(),
  type: text("type").notNull(), // photo or video
  date: timestamp("date").notNull()
});

// Create insert schemas
export const insertMemberSchema = createInsertSchema(members);
export const insertNewsSchema = createInsertSchema(news);
export const insertEventSchema = createInsertSchema(events);
export const insertGallerySchema = createInsertSchema(galleries);

// Export types
export type Member = typeof members.$inferSelect;
export type News = typeof news.$inferSelect;
export type Event = typeof events.$inferSelect;
export type Gallery = typeof galleries.$inferSelect;

// Export insert types
export type InsertMember = z.infer<typeof insertMemberSchema>;
export type InsertNews = z.infer<typeof insertNewsSchema>;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type InsertGallery = z.infer<typeof insertGallerySchema>;
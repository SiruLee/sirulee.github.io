---
title: Towards an Ontology for Generative Design of Mechanical Assemblies
author: jiheon_lee
description: Paper by B. Aameri, H. Cheong, and J. C. Beck (2019)
date: 2024-05-09 15:10:00 -0400
categories: [Paper Reading, Computer Science Paper]
tags: [Artificial Intelligence, First-Order Logic, Generative AI]
math: true
toc: true
---

## Introduction
This posts is written after reading the study on an _Ontology for Generative Design of Mechanical Assemblies_ by Bahar Aameri, et al. (2019)[^r1] for the project under Prof. Aameri during 2024 Summer. The paper studies the use of ontologies to model and reason about designs. The paper specifically provides an ontology to specify connection, parthood, and shapes in mechanical assemblies. The idea extends the _Ground Mereotopology_ of Casati and Varzi (1999)[^Casati-Varzi] to multi-dimention, and combines it with a qualitative shape ontology based on the Hilbert's _axiomatic theory of geometry_ (1902)[^Hilbert].

## Why Ontology?
There were many approaches to deal with configuration design problems. They includes setting constraints, using shape or generative grammers to modify a given design, and generic search algorithms. However, they were either not proven to be complete or the feasible solution space is so small compared to infeasible solution space. Therefore, the use of logical ontologies is investigated to serve two main purposes:

1. model qualitative constraints; and
2. prune infeasible designs during search.

The ontology presented in this paper is called the _Assembly Ontology_, which is a module of an overarching ontology called the _PhysicalWorld Ontology_. It is developed to specify contraints for a generative design software tool. 

## PhysicalWorld Ontology
The main aim of PhysicalWorld Ontology is to axiomatize concepts and properties required for representation and reasoning about physical domains. It consists of three main modules:

1. Assembly Ontology: will be discussed in detail below.
2. Occupation Ontology: specifies the relationship between a physical object and the space it occupies.
3. Kinematics Ontology: is an axiomatization of fundamental concepts required for qualitative representation of kinematics of physicsl systems

Each module has their own sub-modules and is axiomatized in first-order logic.

## Past Related Work
The paper categorizes the existing related work in ontologies into three groups:

1. General consepts in assembly design and process: Common Feature Ontology by Imran and Young (2015, 2016), upper-level OWL by Mosca et al. (2009), OntoSTEP by Barbau et al. (2012) as the OWL translation of STEP, and Open Assembly Model by Fiorentini et al,. (2007) as standardiztion effort extending NIST's CPM ontology.
2. Feature Ontologies: The first attempt from Borst et al., (1997) as a module of PhysSys ontology specifies the relationships between components of a physical system, and incomplete axiomatizations by Horváth et al. (1998). Horváth divides design features in three fundamental concepts: the set of components of the product (_entities_), the arrangements of the components (_situations_), and the physical environment the product is within (_phenomena_). 
3. Ontologies of specific properties: Kim et al. (2008), Demoly et al. (2012), and Gruhier et al. (2015) take a similar approach to axiomatize assembly joining methods, but their ontologies are incomplete as they make implicit assumptions about shapes and dimensionality of assembly components.

## Ontological Choices for the Assembly Ontology
> An assembly is a collection of components that are attached together by some sorts of mechanical joints. 

The paper focus on axiomatizing part-whole and connection relationships; shape, relative position, and dimensionality of componenets; and the boundaries of components.

### Part-Whole and Connection Relationships
For formalization of connection and part-whole relations, multi-dimensional mereotopologies are used. Especially physical domains are typically finite, and this finiteness implies two restrictions on the mereotopological theory:

1. The theory must not be atomless as such models are infinite
2. The theory must not be extensional since finite mereotopological configurations are not necessarily extensional.

> To read more about the theory of mereotopologies, see Aameri and Gruninger (2017)[^Gruninger-Aameri].
{: .prompt-info }

Hence, the paper choose to extends the General Mereotopology (MT), the weakest theory among the mereotopologies presented by Casati and Varzi (1999)[^Casati-Varzi]

### Shape, Relative Position, and Dimensionality 
The paper choose to extend an ontology presented by Gruninger and Bouafoud (2011)[^Gruninger-Bouafound] to capture three-dimensionality of assembly components and their shapes. The ontology is based on a subtheory of Hilbert's axiomatic theory of geometry (1902)[^Hilbert] which entails

1. *Incidence relations*: captures the relationship between entities with different dimensions.
2. *Betweenness relations*: captures the relative position of components.

### Shape Boundaries
For the representation of boundaries, we should adopts two ontological viewpoints: boundary is a region which has empty interior (not consider as lower-dimensional entities) (Smith, 1996); and boundary is a lower-dimensional entity which is part of the bounded entity adopted by Baumann et al. (2016), and Hahmann (2013).

### Ontological Commitments
The list of key ontological commitments in axiomatizing the Assembly Ontology:
1. There are four dimensions: there are primitive predicate representing zero-, one-, two-, and three-dimensional objects.
2. A collection of three-dimensional entities is a physical entity: there is a primitive predicate representing collections of three-dimensional objects.
3. Each physical entity is of exactly one of the four dimensions, or is a collection of three-dimensional objects
4. Individuals with different dimensions are only related by incidence relations: each class of objects is mereotopologically independent of the other classes, and there is no betweenness relationships between objects with different dimensions.
5. Zero- and one-dimensional entities do not exist independently of two-dimensional entities; two-dimensional entities do not exist independently of three-dimensional entities.
6. Relative positions of equi-dimensional individuals are captured by betweenness relations.
7. Spatial relationships between equi-dimensional individuals are captured by mereological and/or topological relations.
8. A boundary always bounds an entity with a higher dimension.
9. Every three-dimensional entity has at least one boundary, where the dimension of the boundary is exactly two-dimensional

## The Assembly Ontology
The Assembly Ontology (AO) consists of three primary modules:

1. *The Shape Ontology*: based on the CardWorld and BoxWorld Ontologies by Gruninger and Bouafound (2011)[^Gruninger-Bouafound] which itself is based on Hilbert's axiomatic theory of geometry by Hilbert (1902)[^Hilbert]. The ontology specifies properties and relationships among five disjoint categories of entities that represent zero-, one-, two-, three-, and four-dimensional objects where four-dimensional objects are collections of three-dimensional objects.
2. *The MT Multidimensional Object Mereotopology (MT MOM)*: captures mereological and topological relationships between individuals with zero-, one-, two-, and three-dimensions.
3. *The Boundary Ontology*: extends the Shape Ontology with axioms that describe properties of physical boundaries.

[^r1]: Aameri, B., Cheong, H., & Beck, J. (2019). _Towards an ontology for generative design of mechanical assemblies_. Appl. Ontology, 14, 127-153.
[^Casati-Varzi]: Casati, R. and Varzi, A. (1999). _Parts and places: The structures of spatial representation_. MIT Press
[^Gruninger-Aameri]: Gruninger, M. and Aameri, B. (2017). _A new perspective on the mereotopology of RCC8_. In COSIT 2017.
[^Gruninger-Bouafound]: Gruninger, M. and Bouafoud, S. (2011). Thinking outside (and inside) the box. In _Proceedings of SHAPES 1.0: The Shape of Things_. _Workshop at CONTEXT-11_, volume 812. CEUR-WS.
[^Hilbert]: Hilbert, D. (1902). _The foundations of geometry_. Open court publishing Company.

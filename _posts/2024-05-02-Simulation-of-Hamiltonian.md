---
title: Simulating Hamiltonian dynamics with a truncated Taylor Series
author: jiheon_lee
description: Paper by Berry, Childs, Cleve, Kothari, and Somma
date: 2024-05-02 01:05:00 -0400
categories: [Paper Reading, Quantum Physics]
tags: [Quantum Simulation]
math: true
---

## Introduction
The paper introduces a new approach to Hamiltonian simulation with exponentially improved performance compared to the past work[^r1]. The key idea is to decompose the Hamiltonian in to a linear combination of unitary operations and implement Taylor series of the evolution operator. The time evolution is broken up into _segments_ each of which is performed using _oblivious amplitude amplification_. 

## Summary of Method
Suppose we are simulating the time evolution of a finite-dimentional Hamiltonian of the form
$$
\begin{equation}
 H = \sum^L_{l=1}\alpha_lH_l
 \label{eq:linear}
\end{equation}
$$
where each $H_l$ is unitary.
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
> Any Hamiltonian can be decomposed as a linear combination of unitary matrices.
{: .prompt-tip }
<!-- markdownlint-restore -->
Suppose we wish to simulate the evolution under a Hamiltonian $H$ for time $t$:
$$
\begin{equation}
    U:=\exp{-iHt}
    \label{eq:time}
\end{equation}
$$ within error $\epsilon$. Dividing the evolution time into $r$ segments of length $t/r$, the evolution can be approximated as
$$
\begin{equation}
U_r:=\exp(-iHt/r) \approx \sum^K_{k=0}\frac{1}{k!}(-iHt/r)^k,
\label{eq:taylor}
\end{equation}
$$
where the Taylor series is truncated at order $K$.
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
> $e^x = \sum^\infty_{i=0}\frac{x^i}{i!}$
{: .prompt-tip }
<!-- markdownlint-restore -->


[^r1]D. W. Berry, A. M. Childs, R. Cleve, R. Kothari, and R.D. Somma, in Proc. 46th ACM Symposium on Theory of Computing, pp. 283–292 (2014).